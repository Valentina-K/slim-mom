import leaf from 'images/laptop/leaf.jpg'
export const RightSideBar = () =>{
    return (<div style={{backgroundBlendMode: 'multiply', 
    backgroundImage: `url(${leaf})`, 
    backgroundRepeat: 'no-repeat', 
    backgroundColor:'#F0F1F3',
    backgroundPosition: 'bottom right', 
    width: '100vw', 
    height: '100vh' }}>        
        <table>
            <caption>
            Summary for 13.08.2023
            </caption>
            <tbody>
              <tr>
                <td>Left</td>
                <td>100 kcal</td>
              </tr>
              <tr>
                <td>Consumed</td>
                <td>20 kcal</td>
              </tr>
              <tr>
                <td>Daily rate</td>
                <td>150 kcal</td>
              </tr>
              <tr>
                <td>n% of normal</td>
                <td>30 %</td>
              </tr>              
            </tbody>
          </table>
        <h3>Food not recommended</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>)
}