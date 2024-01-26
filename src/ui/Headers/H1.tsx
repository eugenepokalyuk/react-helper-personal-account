const H1: React.FC<{ title: string }> = ({ title }) => {
    return (
        <h1 className="text-[30px] font-[700] mb-4 leading-[30px] text-black" style={{ letterSpacing: '-1.612px' }}>
            {title}
        </h1>
    )
}
export default H1;