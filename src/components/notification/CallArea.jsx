import React from 'react'

const CallArea = () => {
  return (
    	<div className="callto_area">
		<div className="container">
			<div className="row">
				<div className="col-md-7 col-sm-6 col-xs-12">
					<div className="call_text">
						<h2>If you need any help, Please call our number</h2>
					</div>
				</div>
				<div className="col-md-5 col-sm-6 col-xs-12">
					<div className="call">
						<a href="callto:+91-93405-46337"><span><i className="fa fa-phone"></i></span> +91-93405-46337</a>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default CallArea