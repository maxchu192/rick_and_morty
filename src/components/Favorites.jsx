import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCards, orderCards, removeFav, reset } from '../redux/actions/action.js';
import Card from './Card.jsx';
import styles from '../styles/Favorites.module.css';

export default function Favorites({ onClose }) {
    const { myFavorites, idU } = useSelector((state) => state);
    const dispatch = useDispatch()

    function closeFavorite(id) {
        onClose(id);
        dispatch(removeFav({user: idU, char: id}));
    };

    function handleOrder(e) {
        e.preventDefault();
        dispatch(orderCards(e.target.value));
    };

    function handleFilter(e) {
        e.preventDefault();
        dispatch(filterCards(e.target.value));
    };

    function resetBtn() {
        dispatch(reset());
    }

    return (
        <div className={styles.favorites}>
            <h2>Favorites</h2>
            <div className={styles.buttons}>
                <select onChange={handleOrder} name='order' defaultValue={'DEFAULT'}>
                    <option value='DEFAULT' disabled='true'>Select Order</option>
                    <option value='Ascendente'>Ascendente</option>
                    <option value='Descendente'>Descendente</option>
                </select>
                <select onChange={handleFilter} name='filter' defaultValue={'DEFAULT'}>
                    <option value='DEFAULT' disabled>Select Filter</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='unknown'>unknown</option>
                </select>
                <button onClick={resetBtn}>Reset</button>
            </div>
            <div className={styles.fav_container}>
                {
                    myFavorites && myFavorites.map((element, index) => {
                        return (
                            <Card
                                idU={idU}
                                key={index}
                                id={element.id}
                                name={element.name}
                                image={element.image}
                                onClose={() => closeFavorite(element.id)}
                            />)
                    })
                }
            </div>
        </div>
    )
}
