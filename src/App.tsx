import './App.css'
import Header from './components/Header'
import CreateAccountForm from './components/CreateAccountForm'
import CreditCard from './components/CreditCard'
import RevenueCard from './components/RevenueCard'

function App() {

  return (
    <>
    <div className='flex justify-between '>
      <div className='w-[100%]'>
        <Header/>
        <CreateAccountForm/>
      </div>
      <div className='relative inline-block '>
        <div className='h-[100vh] w-full left-28  bg-cdarkgreen absolute'></div>
        <div className='h-[28rem] w-[28rem] rounded-full top-60 border bg-cdarkgreen absolute'></div> 
        <div className='pt-80 pr-24 drop-shadow-2xl'>
          <CreditCard className='-rotate-90' cardNumber="1234 5678 9000 3456" name='Jharzee Gram' date='12/24' issuer='VISA' />
        </div>
        <div className='absolute drop-shadow-2xl -left-16 top-[46%]'>
          <RevenueCard 
              title='Revenue'
              description='Total Arm Band Generated the last 30 days'
              usedAmount='3,500,345'
              payPercentage='64'
              totalAmount='2'
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
