import Stars from "./Stars"
import Voting from "./Voting"

export default function SingleReview(props) {
    
    return (
        
    <div className="flex flex-row m-2">
        <div className="flex-shrink mr-4 mt-4">
          <Voting></Voting>
        </div>
        <div className="flex-1 w-42 bg-white rounded-2xl">

        
            <div className="bg-white p-4 rounded-xl">
                <div className="flex items-center mb-4">
                    <div className='flex-shrink'>
                        <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" height="50" width="50" className="rounded-full mr-4" />
                    </div>
                    <div className="flex-auto">
                        <h2>
                            Reviewer Name
                        </h2>
                        <h2>
                            Reputation 
                        </h2>
                    </div>
                </div>
                <div>
                    <Stars />
                </div>
                <div>
                    <h1 className="text-lg">
                        Review Title
                    </h1>
                    <p className="text-sm">
                        Lorem ipseum dolor. Lorem ipseum dolor. Lorem ipseum dolor. Lorem ipseum dolor. 
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}