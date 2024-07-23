import { Icon } from '@iconify/react'
import React from 'react'
import style from './index.module.css'

const DashboardNavbar = () => {
  return (
    <div className={style.Dashboard_Navbar_Main_Frame}>
        <form className={style.Dashboard_Navbar_Elastic_Search_Form}>
            <input type="text" />
            <button>
                <Icon icon={'material-symbols:search'} height={'4vh'} width={'4vw'}/>
            </button>
        </form>
        <div className={style.Dashboard_Navbar_Inner_Frame}>
            <button>
                <Icon icon={'material-symbols:shopping-cart-outline'} height={'4vh'} width={'4vw'}/>
            </button>
            <button>
                <Icon icon={'iconamoon:notification-fill'} height={'4vh'} width={'4vw'}/>
            </button>
            <button>
                <Icon icon={'gg:profile'} height={'4vh'} width={'4vw'}/>
            </button>
            <button>
                <Icon icon={'material-symbols:search'} height={'100%'} width={'100%'}/>
            </button>
        </div>
    </div>
  )
}

export default DashboardNavbar