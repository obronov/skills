import { MenuPage } from '../pages/menu'
import { FotogalleryPage } from '../pages/fotogallery'
import { CatalogPage } from '../pages/catalog'
import { DetailCatalogPage } from '../pages/detail_catalog'
import { SelectProductPage } from '../pages/select'
import { CartPage } from '../pages/cart'
import { InfoGraphPage } from '../pages/infograph'
import { AuthPage } from '../pages/auth'
import { ContactsPage } from '../pages/contacts'
import { DinamicLinkPage } from '../pages/dinamic_link'
import {SimplePage}  from '../pages/simple'
import {Home}  from '../pages/home'


 export const mainMenu = [
    {
      path: "/",
      exact: true,
      component: Home,
      name: 'Главная'
    },
    {
      path: "/simple",
     component: SimplePage,
     name: 'Обычная текстовая страница'
    },
    {
      path: "/menu",
     component: MenuPage,
     name: 'Страница с сложным меню'
    },
    {
      path: "/fotogallery",
     component: FotogalleryPage,
     name: 'Фотогалерея'
    },
    {
      path: "/catalog",
     component: CatalogPage,
     name: 'Каталог интернет-магазина'
    }
    ,
    {
      path: "/detail_catalog",
     component: DetailCatalogPage,
     name: 'Детальная страница товара'
    }
    ,
    {
      path: "/select",
     component: SelectProductPage,
     name: 'Избранный товар'
    },
    {
      path: "/cart",
     component: CartPage,
     name: 'Корзина'
    },
    {
      path: "/infograph",
     component: InfoGraphPage,
     name: 'Страница с инфографикой'
    },
    {
      path: "/auth",
     component: AuthPage,
     name: 'Авторизация'
    },
    {
      path: "/contacts",
     component: ContactsPage,
     name: 'Контакты'
    },
    {
      path: "/dinamic_link",
     component: DinamicLinkPage,
     name: 'Динамические ссылки'
    }
  ]; 
 
