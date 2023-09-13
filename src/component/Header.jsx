import profile from '../../src/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 mx-5 border-b-2'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;