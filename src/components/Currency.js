import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {

    const { currency, dispatch } = useContext(AppContext);

    const [isOpen, setIsOpen] = useState(false);
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    const setCurrencyHandler = (currency) => {

        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    };

    //  '£' '€' '$' '₹'

    const currencyLabel = () => {
        switch (currency) {
            case '$':
                return '$ Dollar'
            case '£':
                return '£ Pound'
            case '€':
                return '€ Euro'
            case '₹':
                return '₹ Ruppee'
            default:
                return ''
        }
    }

    return (
        <div id="currency-menu" className="dropdown" style={{ cursor: 'pointer' }}>
            <button
                id="currency-menu-button"
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: '#93e399', color: '#fff' }}
                onClick={() => setIsOpen(!isOpen)}
            >
                Currency {'('}{currencyLabel()}{')'}
            </button>



            <ul className={`custom-menu dropdown-menu ${isOpen ? 'show' : ''} `}>
                <li
                >
                    <button
                        //id="dollar"
                        className="dropdown-item"
                        type="button"
                        style={{ backgroundColor: '#93e399' }}
                        //style={{ backgroundColor: hover ? '#fff' : '#93e399' }}
                        //onMouseEnter={handleMouseEnter}
                        //onMouseLeave={handleMouseLeave}
                        onClick={() => setCurrencyHandler('$')}
                    >
                        $ Dollar
          </button>
                </li>
                <li
                >
                    <button
                        //id="pound"
                        className="dropdown-item"
                        type="button"
                        style={{ backgroundColor: '#93e399' }}
                        //style={{ backgroundColor: hover ? '#fff' : '#93e399' }}
                        //onMouseEnter={handleMouseEnter}
                        //onMouseLeave={handleMouseLeave}
                        onClick={() => setCurrencyHandler('£')}
                    >
                        £ Pound
          </button>
                </li>
                <li
                >
                    <button
                        //id="euro"
                        className="dropdown-item"
                        type="button"
                        style={{ backgroundColor: '#93e399' }}
                        //style={{ backgroundColor: hover ? '#fff' : '#93e399' }}
                        //onMouseEnter={handleMouseEnter}
                        //onMouseLeave={handleMouseLeave}
                        onClick={() => setCurrencyHandler('€')}

                    >
                        € Euro
          </button>
                </li>

                <li>
                    <button
                        //id="ruppee"
                        className="dropdown-item"
                        type="button"
                        style={{ backgroundColor: '#93e399' }}
                        //style={{ backgroundColor: hover ? '#fff' : '#93e399' }}
                        //onMouseEnter={handleMouseEnter}
                        //onMouseLeave={handleMouseLeave}
                        onClick={() => setCurrencyHandler('₹')}
                    >
                        ₹ Ruppee
          </button>
                </li>

            </ul>

        </div>
    );
};

export default Currency;

{/*<select className="dropdown-item"  style={{ backgroundColor: '#93e399', color: '#fff' }} onChange={(choice) => setCurrencyHandler(choice.target.value)}>
        <option defaultValue value="$" name="$">$ Dollar</option>
        <option value="£" name="£">£ Pound</option>
        <option value="₹" name="₹">₹ Ruppee</option>
        <option value="€" name="€">€ Euro</option>
</select>*/}