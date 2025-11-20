import FooterSix from '../../../../layouts/footers/FooterSix'
import Header from '../../../../layouts/headers/Header'
import BreadCrumb from '../../../common/BreadCrumb'
import ShopArea from './ShopArea'


const Shop = () => {
   return (
      <>
         <Header />
         <main>
            <BreadCrumb title="Shop Page" sub_title="Shop Archive Page" />
            <ShopArea />
         </main>
         <FooterSix />
      </>
   )
}

export default Shop
