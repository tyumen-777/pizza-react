import React from 'react';

function Categories({items}) {
    return (
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                <li>{items}</li>

            </ul>
        </div>
    );
}

export default Categories;
