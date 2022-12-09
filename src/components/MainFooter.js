import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import {FiPhone}  from 'react-icons/fi';

function MainFooter() {
  return (
    <div  >
      <Footer 
      theme = "dark"
      
        maxColumnsPerRow={4}
        columns={[
          {
            title: 'Contact us',
            items: [
              {
                icon: (
                  <FiPhone/>
                ),
                title: '999-888-777',
                url: '/contact',
                description: 'Call us now',
            
              },
            ],
          },
        ]}
        bottom="Made by Irina David"
      />
    </div>
  );

}
export default MainFooter;