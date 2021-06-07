import './Menu.css'
import React from "react"
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Hooks</Link>
                </li>
                <li>
                    <Link to="/UseState">useState()</Link>
                </li>
                <li>
                    <Link to="/UseEffect">UseEffect()</Link>
                </li>
                <li>
                    <Link to="/UseRef">UseRef()</Link>
                </li>
                <li>
                    <Link to="/UseMemo">UseMemo()</Link>
                </li>
                <li>
                    <Link to="/UseCallback">UseCallback()</Link>
                </li>
                <li>
                    <Link to="/UseContext">UseContext()</Link>
                </li>
                <li>
                    <Link to="/UseReducer">UseReducer()</Link>
                </li>
                <li>
                    <Link to="/UseMeuHook">UseMeuHook()</Link>
                </li>
            </ul>
        </nav>
    </aside>
)
export default Menu