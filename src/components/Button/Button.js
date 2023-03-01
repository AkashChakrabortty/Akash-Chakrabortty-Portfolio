import React from 'react';

const Button = ({btn}) => {
    return (
        <div>
             <button className="bg-cyan-400 text-white font-semibold py-3 border-2 border-cyan-400 px-3 lg:px-10 rounded-tl-[20px] rounded-br-[20px] mt-4 hover:bg-transparent hover:border-2 transition-[.5s] hover:border-cyan-400 text-xl" >
             {btn}
            </button>
        </div>
    );
};

export default Button;