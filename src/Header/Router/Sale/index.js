import React, { useEffect, useState } from 'react';
import { getHouses } from '../../../store/Houses/houseActions';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../../components/pagination';
import './style.sass'

function Sale() {

    const [currentPage, setCurrentPage] = useState(1);
    const [housesPerPage] = useState(6);
    
    const houses = useSelector(state => 
    state.home.housesList.items);

    const dispatch = useDispatch();
    useEffect(() => dispatch(getHouses()), 
    [dispatch])

    const indexOfLastHouse = currentPage * housesPerPage;
    const indexOfFirstHouse = indexOfLastHouse - housesPerPage;
    const currentHouses = houses.slice(indexOfFirstHouse, indexOfLastHouse);
    const paginate = pageNumber => setCurrentPage(pageNumber);
 
    return (
        <div className='saleContainer'>
            <p>Элитная загородная недвижимость - Продажа</p>
            <h2>Элитная недвижимость в Украине</h2>
            
            
            <ul className='houseList'>
            {currentHouses.map(function(elem) {
                var image = 'https://images.jqestate.ru/' + elem.images[0]['id'] + '-jqestate-2048'
                
                 return <li key={elem.id}>
                <img className='housePhoto' src={image}/>
                <p>Дом в посёлке {elem.location.settlementName}</p>
                <p>{elem.specification.area? 'площадь: '+ elem.specification.area + 'м2' : "площадь: не указана" }</p>
                <p>{elem.saleOffer!==null? '$' + elem.saleOffer.multiCurrencyPrice.usd : 'цена не указана'}</p>
                </li>}  
            )}
            </ul>
            <Pagination housesPerPage={housesPerPage} totalHouses={houses.length} paginate={paginate} />
        </div>  
    )
}

export default Sale;