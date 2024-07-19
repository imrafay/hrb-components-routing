import classNames from "classnames";

function Button({children,primary,secondary,success,warning,danger,outline, rounded,...rest}){
     let classess = classNames(
        {rest},
        'm-2 px-3 py-1.5 border',
        {
            'border-blue-600 bg-blue-400 text-white':primary,
            'border-gray-600 bg-gray-400 text-white':secondary,
            'border-green-600 bg-green-400 text-white':success,
            'border-orange-600 bg-orange-400 text-white':warning,
            'border-red-600 bg-red-400 text-white':danger,
            'rounded-full':rounded,
            'bg-white':outline,
            'text-blue-600': outline && primary,
            'text-gray-600': outline && secondary,
            'text-green-600': outline && success,
            'text-orange-600': outline && warning,
            'text-red-600': outline && danger
        }
    );

    return <button {...rest} className={classess}>
        {children}
    </button>;
}

export default Button;