import HeaderBox from "../../components/HeaderBox";
import RightSidebar from "../../components/RightSidebar";
import TotalBalanceBox from "../../components/TotalBalanceBox";

 
const Home = () => {
    const loggedIn = {firstName: 'Sherif', lastName: 'Bialy', email: 'a@b.c'}
    return ( 
        <section className='home'>
            <div className='home-content'>
             
                <HeaderBox  
                type = "greeting"
                title = "Welcome"
                user = {loggedIn?.firstName || "Guest"}
                subtext = "Access and manage your accounts from anywhere"
                />
                <TotalBalanceBox
                accounts = {[]}
                totalBanks={1}
                totalCurrentBalance={1250.33}
                />
            
            </div>
                <RightSidebar 
                user = {loggedIn}
                transactions = {[]}
                banks = {[{currentBalance: 123}, {currentBalance: 500}]}
                />
        </section>
     );
}
 
export default Home;