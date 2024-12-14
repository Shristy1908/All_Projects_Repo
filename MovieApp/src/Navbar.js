import styled from "styled-components";

const Nav = styled.div`
   width: 100%;
   height: 60px;
   background-color:rgb(86, 172, 228);
   display: flex;
   justify-content: space-between;
`;
const Title = styled.div`
    font-size: 25px;
    color: white;
    font-weight: 600;
    font-family: "Montserrat",sans-serif;
    text-transform: uppercase;
    margin-left: 20px;
    margin-top: 15px;
    &:hover{color:blue}
`;
const CartContainer= styled.div`
     position:relative;
     cursor:pointer;
`;

const Carticon =styled.img`{
    height:48px;
    margin-right:20px;
    color:#fff;}
`;

const CartCnt=styled.span`
      background:${(props)=> props.color};
      border-radius:50%;
      padding:4px 8px;
      position:absolute;
      right:10px;
      top:0px;
      font-size:12px;
      font-family:600;
      visibility:${(props)=> props.show ?"visible":'hidden'};
`

function Navbar(props){  

        const {cartCount}=props;
        return(
            <>
                <Nav>
                    <Title>
                        MovieApp
                    </Title>
                    <CartContainer>
                        <Carticon alt="cart icon" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/cart-2693996-2235912.png?f=avif&w=128" />
                        <CartCnt color="white" show={true}>{cartCount}</CartCnt>
                    </CartContainer>
                </Nav>
            </>
        )
}

export default Navbar;

