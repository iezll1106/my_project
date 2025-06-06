import { 
  CheckIcon, 
  ClockIcon, 
  TruckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-yellow-500 text-white': status === 'shipped',
          'bg-green-500 text-white': status === 'delivered',
          'bg-red-500 text-white': status === 'cancelled',
        },
      )}
    >
      {status === 'pending' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'shipped' ? (
        <>
          Shipped
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'delivered' ? (
        <>
          Delivered
          <TruckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'cancelled' ? (
        <>
          Cancelled
          <XMarkIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
