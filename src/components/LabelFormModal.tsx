import { Dialog, Transition } from "@headlessui/react";
import { PencilIcon } from "@heroicons/react/outline";
import React, { Fragment, useState } from "react";

export default function LabelFormModal({
  label,
  onSubmit,
}: {
  label: string;
  onSubmit: (label: string) => void;
}) {
  const [labelValue, setLabelValue] = useState(label);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    onSubmit(labelValue);
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <button type="button" onClick={openModal}>
          <PencilIcon className="h-4 my-auto" />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Address Label
                  </Dialog.Title>
                  <div className="mt-2">
                    <input
                      type="text"
                      className="border p-2 rounded w-full"
                      value={labelValue}
                      onChange={(e) => setLabelValue(e.target.value)}
                      placeholder="eg. Bought from Coinbase"
                    />
                    <span className="text-xs text-gray-500">
                      (tip: keep it short!)
                    </span>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Submit!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
