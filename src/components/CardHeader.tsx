import StarIcon from '@/assets/icons/star.svg';
import { twMerge } from 'tailwind-merge';

export const CardHeader = ({title,description,className,}: {
  title:string;
  description:string;
  className?: string;
}) => {
    return (
        <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10",className)}>
          <div className="inline-flex items-center gap-2">
          <StarIcon className="size-9 text-green-700"/>
          <h3 className="font-serif md:text-3xl xs:text-xl ">{title}</h3>
          </div>
          <p className="xs:text-sm md:text-base max-w-xs mt-2">{description}</p>
        </div>
    )
}