import Header from './Header'


const Layout = ({ children, currentUser }) => {
    return (
        <div>
            <Header currentUser={currentUser}/>
            {children}
        </div>
    )
}

export default Layout