import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from 'lucide-react';
import LoadingButton from "@/components/ui/LoadingButton.js"; // Adjust the import path as necessary
import Image from "next/image";

const features = [
  {
    name: 'Store Your PDF Documents',
    description:
      'Experience lightning-fast answers to your queries, ensuring you get the information you need instantly.',
    icon: ZapIcon,
  },
  {
    name: 'Blazing Fast Responses',
    description:
      'Keep all your important PDF files securely stored and easily accessible anytime, anywhere.',
    icon: GlobeIcon,
  },
  {
    name: 'Chat Memorisation',
    description:
      'Our intelligent chatbot remembers previous interactions, providing a seamless and personalised experience.',
    icon: BrainCogIcon,
  },
  {
    name: 'Interactive PDF Viewer',
    description:
      'Engage with your PDFs like never before, using our intuitive and interactive viewer.',
    icon: EyeIcon,
  },
  {
    name: 'Cloud Backup',
    description:
      'Rest assured, knowing your documents are safely backed up on the cloud, protected from loss or damage.',
    icon: ServerCogIcon,
  },
  {
    name: 'Responsive Across Devices',
    description:
      'Access and chat with your PDFs seamlessly on any device, whether it is your desktop, tablet, or smartphone.',
    icon: MonitorSmartphoneIcon,
  },
];

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600">
      <div className="relative bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="absolute top-4 right-4">
        </div>
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h1 className="font-bold leading-9 mt-2 text-2xl"><strong>SHARIFF PRESENTING:</strong></h1>
            <br></br>
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Your Interactive Document Companion
            </h2>

            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your PDFs into Interactive Conversations
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Introducing{' '}
              <span className="font-bold text-indigo-600">Chat with PDF.</span>
              <br />
              <br /> Upload your document and our chatbot will answer questions,
              summarise content, and answer all your Qs. Ideal for everyone,{' '}
              <span className="text-indigo-600">Chat with PDF</span> turns static
              documents into{' '}
              <span className="font-bold">dynamic conversations</span>,
              enhancing productivity 10x fold effortlessly.
            </p>
          </div>

          <LoadingButton />
        </div>

        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              alt="Software Screenshot"
              src="https://i.imgur.com/VciRSTI.jpeg"
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]" />
            </div>
          </div>
        </div>

        <div className="">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6
          gap-y-10 text-base leading-7 text-gray-600 dark:text-gray-400 sm:grid-cols-2
          lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16
        ">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900 dark:text-gray-100">
                  <feature.icon
                    aria-hidden="true"
                    className="absolute left-1 top-1 h-5 w-5 text-indigo-600 dark:text-indigo-400"
                  />
                </dt>

                <dd>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
