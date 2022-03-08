import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { Loader } from './';
const MaStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-white"
const Inp = ({name, type, plchldr, value, handler}) => (
    <input 
        type = {type}
        name = {name}
        value={value}
        placeholder = {plchldr}
        onChange = {(cr) => handler(cr, name)}
        step="0.0001"
        className="my-2 w-full p-2 rounded-sm outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    
    />
);

const Home = () => {
    const ConnectMeta = () => {
    
    }
    const SubmitTrans = () => {
        
    }
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col mf:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">Envoyer Crypto <br />à travers le monde</h1>
                    <p className="text-left text-white mt-5 font-light w-9/12 text-base">explorez le monde de la cryptographie, achetez et vendez facilement Crypto avec cryptoWB</p>
                    <button
                    type="button"
                    onClick={ConnectMeta}
                    className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] text-white text-base font-semibold"
                    >Connectez votre portefeuille</button>
                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className={`rounded-tl-2xl ${MaStyles}`}>fiabilité</div>
                        <div className={`rounded-tr-2xl sm:rounded-none ${MaStyles}`}>Blockchain</div>
                        <div className={`sm:rounded-tr-2xl rounded-none ${MaStyles}`}>Web 3.0</div>
                        <div className={`sm:rounded-bl-2xl rounded-none ${MaStyles}`}>EtherNet</div>
                        <div className={`rounded-bl-2xl sm:rounded-none ${MaStyles}`}>Sécurité</div>
                        <div className={`rounded-br-2xl ${MaStyles}`}>Low fees</div>

                    </div>
                </div>
                <div className="flex flex-col flex-1 justify-start items-center w-full mf:mt-0 mt-10">
                    <div className="p-3 justify-end items-start flex-col rounded-xl h-40 my-5 sm:w-80 w-full eth-card white-glassmorphism">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                    <SiEthereum fontSize={24} color="#FFFFFF"/>
                                </div>
                                <BsInfoCircle fontSize={16} color="#FFFFFF"/>
                            </div>
                            <div>
                                <p className="text-white font-light  text-xs">0x17B44E4936D2AA2F569D4F31bD80d2198f7E889E</p>
                                <p className="text-white font-semibold text-lg">Ethereum</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <Inp name="address" type="text" plchldr="Address to" hander={() => {}}/>
                        <Inp name="amount" type="number" plchldr="Amount (ETH)" hander={() => {}}/>
                        <Inp name="keyword" type="text" plchldr="Mot cle" hander={() => {}}/>
                        <Inp name="msg" type="text" plchldr="Entrer un message" hander={() => {}}/>
                        <div className="h-[1px] w-full bg-gray-400 my-2"/>
                        {false ? (
                            <Loader/>
                        ) : (
                            <button type="button" onClick={SubmitTrans} className="text-white w-full mt-2 border-[1px] p-2 border-[#02a19f] rounded-full cursor-pointer">Envoyer</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Home;