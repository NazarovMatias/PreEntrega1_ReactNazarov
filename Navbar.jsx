import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <>
        <CartWidget />
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Características</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Precios</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
            </a>
            <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Alimentos</a></li>
            <li><a class="dropdown-item" href="#">Juguetes</a></li>
            <li><a class="dropdown-item" href="#">Cama</a></li>
            <li><a class="dropdown-item" href="#">Ropa</a></li>
            </ul>
        </li>
        </ul>
    </div>
    </div>
</nav>

</>
    )
}

export default Navbar