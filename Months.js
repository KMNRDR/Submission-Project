import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function Months() {
    return(
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Months
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/Month1">Month 1</Dropdown.Item>
                    <Dropdown.Item href="/Month1">Month 2</Dropdown.Item>
                    <Dropdown.Item href="/Month1">Month 3</Dropdown.Item>
                    <Dropdown.Item href="/Month1">Month 4</Dropdown.Item>
                    <Dropdown.Item href="/Month1">Month 5</Dropdown.Item>
                    <Dropdown.Item href="/Month1">Month 6</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default Months;