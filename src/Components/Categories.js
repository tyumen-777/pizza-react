import React from 'react';

function Categories({items, onClick}) {
    const [activeItem, setActiveItem] = React.useState(null)
    const onSelectItem = (id) => {
        setActiveItem(id)
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                {items &&
                items.map((name, id) => (
                        <li className={activeItem === id ? 'active' : ''}
                            onClick={() => onSelectItem(id)}
                            key={`${name}_${id}`}>
                            {name}</li>
                    )
                )}
            </ul>
        </div>
    );
}

export default Categories;
