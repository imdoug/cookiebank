import React from 'react'

const Main = () => {
      const name = "Steph Curry"
      const acc1 = 2.380
      const acc2 = 795
  return (
    <div className='container-master'>
          <header>
                <div className='logo'>🍪 ATM</div>
                <div className='logout'>
                      <button>Card Return <span><i class="fa fa-credit-card"></i></span></button>
                </div>
          </header>
          <main>
            <div className='visor'>
                  <div></div>
                  <div>
                        <p>Welcome</p>
                        <h3>{name}</h3>
                  </div>
                  <div>
                        <p>Account 1#</p>
                        <h3>🍪 {acc1}</h3>
                  </div>
                  <div>
                        <p>Savings 2#</p>
                        <h3>🍪 {acc2}</h3>
                  </div>
            </div>
            <div className='options'>
                  <button>Get Cookies</button>
                  <button>Deposit</button>
                  <button>Transfer</button>
                  <button>Interest</button>
                  <button>Account Settings</button>
                  <button className='other'>Other</button>
            </div>
          </main>
          <footer>
                <div className='quick-cash'>
                      <p>$100</p>
                      <button>Quick Cash <i class='fas fa-angle-double-right'></i></button>
                </div>
          </footer>
    </div>
  )
}

export default Main