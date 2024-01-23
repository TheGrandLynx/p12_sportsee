import { useParams } from 'react-router-dom'


import React, { useState, useEffect } from "react";
import axios from "axios";

import ChartActivity from '../ChartActivity';
import Card from '../Card';

import energy from '../../assets/energy.svg'
import chicken from '../../assets/chicken.svg'
import apple from '../../assets/apple.svg'
import cheeseburger from '../../assets/cheeseburger.svg'

function Profil() {


	document.title = 'Profil - SportSee'

	const url = "http://localhost:3000/user/12";
  const [data, setData] = useState([]);

  const fetchInfo =  () => {
    return axios.get(url).then((res) => setData(res.data));
  };

  const [activityData, setActivityData] = useState([]);

  const fetchActivity = async () => {
    return await axios.get("http://localhost:3000/user/12/activity").then((res) => setActivityData(res.data));
  };

  useEffect(() => {
    fetchInfo();
    console.log("toto")
    console.log(data)
    console.log(data.data)
    fetchActivity();
    console.log("tata")
    console.log(activityData)
    console.log(activityData.data)
  }, []);

  


  
	

	

	return (
		<section className="profil-wrapper">
			{data && (
				<div className="profil">
					<h2 className="profil-title">
						Bonjour{' '}
						<span className="profil-firstName">
						</span>
					</h2>
					<p className="profil-subtitle">
						Félicitations ! Vous avez explosé vos objectifs hier 👏
					</p>
					

						
					
				</div>
			)}

<div className="activity-charts">
								{activityData && (
									<ChartActivity
										data={activityData.data.sessions}
									/>
								)}
							</div>


                            <div className="dashboard-aside">
							<Card
								userKeyData={data.data.keyData.calorieCount}
								unit="kCal"
								subtitle="Calories"
								className="calorie"
								logo={energy}
							/>
							<Card
								userKeyData={data.data.keyData.proteinCount}
								unit="g"
								subtitle="Proteines"
								className="protein"
								logo={chicken}
							/>
							<Card
								userKeyData={data.data.keyData.carbohydrateCount}
								unit="g"
								subtitle="Glucides"
								className="carbohydrate"
								logo={apple}
							/>
							<Card
								userKeyData={data.data.keyData.lipidCount}
								unit="g"
								subtitle="Lipides"
								className="lipid"
								logo={cheeseburger}
							/>
						</div>
		</section>
        
	)
}



export default Profil