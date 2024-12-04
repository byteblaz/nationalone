export const SectionHeader = ({
    title,
    eyebrow,
    description,
}: {
    title: string;
    eyebrow: string;
    description: string;
}) => {
    return(
        <>
        <div className="flex justify-center">
        <p className="uppercase xs:text-sm md:text-base font-semibold tracking-widest bg-gradient-to-r from-emerald-600 to-sky-600 text-center bg-clip-text text-transparent">
          {eyebrow}
        </p>
        </div>
        <h2 className="font-serif text-slate-800 xs:text-2xl sm:text-3xl md:text-5xl text-center mt-6">{title}</h2>
        <p className="text-center xs:text-xs sm:text-sm md:text-lg lg:text-lg text-slate-800 mt-4 max-w-lg mx-auto">{description}</p>
        </>
    )
}