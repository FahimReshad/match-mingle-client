

const AboutUsCard = () => {
    return (
        <div className="grid lg:grid-cols-3 gap-8 lg:w-2/3 mx-auto">
            <div className="text-center shadow-2xl p-8 rounded-lg">
                <img className="h-20 w-20" src="https://i.ibb.co/Xpp7cWF/prize.png" alt="" />
                <h3 className="text-xl text-[#66451c]">Genuine profiles</h3>
                <p className="text-[#66451c] text-xl">The most trusted wedding matrimony brand.</p>
            </div>
            <div className="text-center shadow-2xl p-8 rounded-lg">
                <img className="h-20 w-20" src="https://i.ibb.co/8mwBRqL/trust.png" alt="" />
                <h3 className="text-xl text-[#66451c]">Most trusted</h3>
                <p className="text-[#66451c] text-xl">The most trusted wedding matrimony brand</p>
            </div>
            <div className="text-center shadow-2xl p-8 rounded-lg">
                <img className="h-20 w-20" src="https://i.ibb.co/zxnY6HT/rings.png" alt="" />
                <h3 className="text-xl text-[#66451c]">2000+ weddings</h3>
                <p className="text-[#66451c] text-xl">The most trusted wedding matrimony brand</p>
            </div>
        </div>
    );
};

export default AboutUsCard;