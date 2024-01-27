const H1: React.FC<{ title: string }> = ({ title }) => {
    return (
        <h1 className="text-[30px] font-[700] leading-[30px] text-black -tracking-[1.25px]">
            {title}
        </h1>
    )
}
export default H1;