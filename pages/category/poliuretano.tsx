import { NextPage } from 'next'
import { useProduct } from '../../hooks';
import { Layout } from '../../src/component/layout';
import { ProductComponent } from '../../src/component/page';
import { HeadingPrimary } from '../../src/component/ui';



const PoliuretanoPage: NextPage= () => {
  const { products, isLoading } = useProduct('/wearProducts?category=poliuretano');
  return (
    <Layout title={'Choco - Poliuretano'} pageDescription={'pintura al mejor precio'}>
      <HeadingPrimary titleP='poliuretano'/>
      {
        isLoading
          ? <h1>Cargando....</h1>
          : <ProductComponent products={products}/>
      }
      
    </Layout>
  )
}


export default PoliuretanoPage 