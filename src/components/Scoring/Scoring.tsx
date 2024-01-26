import { ReactComponent as Region } from "../../assets/region.svg";

const Scoring: React.FC = () => {
    return (
        <section className="mx-auto max-w-[700px] bg-white rounded-[20px] mt-4 p-4">
            <h1 className='font-hauss text-[30px] font-semibold mb-4 leading-[30px] text-black'>Скоринг</h1>

            <div>
                <Region />
            </div>
        </section>
    );
};

export default Scoring;