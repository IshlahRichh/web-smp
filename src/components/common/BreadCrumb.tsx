import { Link } from "react-router-dom";

interface DataType {
   sub_title: string;
   title: string;
}
const BreadCrumb = ({ sub_title, title }: DataType) => {
   return (
      <div className="tg-breadcrumb-area tg-breadcrumb-spacing-5 fix p-relative z-index-1 include-bg" style={{ backgroundImage: `url(/assets/img/breadcrumb/breadcrumb.jpg)` }}>
         <div className="tg-hero-top-shadow"></div>
         <div className="tg-breadcrumb-shadow"></div>
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="tg-breadcrumb-content text-center">
                     <h2 className="tg-breadcrumb-title mb-5 fs-40">{title}</h2>
                     <div className="tg-breadcrumb-list-4">
                        <ul>
                           <li><Link to="/">Home</Link></li>
                           <li><i className="fa-sharp fa-solid fa-angle-right"></i></li>
                           <li>Pages</li>
                           <li><i className="fa-sharp fa-solid fa-angle-right"></i></li>
                           <li>{sub_title}</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
			<div className="tg-hero-bottom-shape d-none d-md-block">
				<span>
					<svg width="472" height="298" viewBox="0 0 432 298" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							className="line-1"
							opacity="100"
							d="M39.6062 428.345C4.4143 355.065 -24.2999 203.867 142.379 185.309C350.726 162.111 488.895 393.541 289.171 313.515C129.391 249.494 458.204 85.4772 642.582 11.4713"
							stroke="#006cff"
							strokeWidth="50"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</span>
			</div>
			<div className="tg-hero-bottom-shape-2 d-none d-md-block">
				<span>
					<svg width="454" height="341" viewBox="0 0 454 251" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							className="line-1"
							opacity="100"
							d="M144.616 328.905C116.117 300.508 62.5986 230.961 76.5162 179.949C93.9132 116.184 275.231 7.44493 -65.0181 12.8762"
							stroke="#006cff"
							strokeWidth="50"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</span>
			</div>
      </div>
   )
}

export default BreadCrumb
