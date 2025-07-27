"use client";
import Button from "@/@components/core/Button/Button";
import Modal from "@/@components/core/Modal/Modal";
import Image from "next/image";
interface IAskModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

const AskModal = ({ isModalOpen, setIsModalOpen }: IAskModalProps) => {
  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} width="w-full md:w-3/4" maxWidth="max-w-4xl">
        <Modal.Body>
          <div className="w-full gap-5 min-h-80">
            <div className="mb-10">
              <Image
                src={"https://cdn.10minuteschool.com/images/skills/call-us.png"}
                alt={""}
                height={100}
                width={100}
              />
            </div>

            <p className="text-center">
              কোন জিজ্ঞাসা, সমস্যা বা পরামর্শ জানাতে ফোন করুন নিচের নাম্বারে (সকাল ৯টা - রাত ১০টা )
            </p>
            <a href="tel:16910" className="mt-6 block cursor-pointer">
              <p className="text-center mt-8 text-2xl font-bold text-green-600">16910</p>
              <div className="flex items-center justify-center mt-4">
                <Button className="!bg-green-600 cursor-pointer">কল করুন: 16910</Button>
              </div>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AskModal;
