// import { Link } from "react-router-dom";
import Choose4 from "../../svg/home-one/Choose4";
import Choose5 from "../../svg/home-one/Choose5";
import Choose3 from "../../svg/home-one/Choose3";
// import Button from "../common/Button";

const Choose = () => {
	return (
		<div className="tg-chose-area p-relative">
			<img className="tg-chose-shape p-absolute d-none d-lg-block" style={{ marginLeft: '-70px' }} src="/assets/img/chose/school-shape.png" alt="shape" />
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-12">
						<div className="tg-chose-content mb-100">
							<div className="tg-chose-section-title mb-30">
								{/* <h5 className="tg-section-subtitle mb-15 wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".1s">Dream Your Next Class</h5> */}
								<h2 className="mb-15 text-capitalize wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".9s">Program Kelas<br /> SPEMDUTA</h2>
								<p className=" wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".9s">
									Program kelas unggulan Spemduta dirancang untuk mencetak generasi berkarakter, kreatif, dan berdaya saing global melalui pembelajaran Islami yang modern dan inspiratif, membimbing setiap siswa menemukan potensi terbaiknya dan siap menaklukkan masa depan.
									{/* Melalui pembelajaran Islami yang modern dan inspiratif, setiap siswa dibimbing untuk menemukan potensi terbaiknya dan siap menaklukkan masa depan. */}
								</p>
							</div>
							<div className="tg-chose-list-wrap">
								<div className="tg-chose-list d-flex mb-15 wow fadeInUp" data-wow-delay=".6s" data-wow-duration=".9s">
									<span className="tg-chose-list-icon mr-20">
										<Choose3 />
									</span>
									<div className="tg-chose-list-content">
										<h4 className="tg-chose-list-title tg-section-subtitle mb-5 fadeInUp"><a href="/excellent">Excellent</a></h4>
										<p>Program pengembangan peminatan dan keterampilan siswa melalui kelas talent (Edusains dan Enterpreneur)</p>
									</div>
								</div>
								<div className="tg-chose-list d-flex mb-15 wow fadeInUp" data-wow-delay=".6s" data-wow-duration=".9s">
									<span className="tg-chose-list-icon mr-20">
										<Choose4 />
									</span>
									<div className="tg-chose-list-content">
										<h4 className="tg-chose-list-title mb-5 tg-section-subtitle fadeInUp"><a href="/tahfidz">Tahfidz</a></h4>
										<p>Bekerja sama dengan Tajdid Center PWM Jawa Timur dalam pengembangan keterampilan membaca, menulis, menghafal, dan memahami Al-Quran dengan target minimal 3 juz.</p>
									</div>
								</div>
								<div className="tg-chose-list d-flex mb-40 wow fadeInUp" data-wow-delay=".7s" data-wow-duration=".9s">
									<span className="tg-chose-list-icon mr-20">
										<Choose5 />
									</span>
									<div className="tg-chose-list-content">
										<h4 className="tg-chose-list-title mb-5 tg-section-subtitle fadeInUp"><a href="/mico">M-ICO</a></h4>
										<p>Bekerja sama dengan ACT Education Solution dalam pengembangan keterampilan Bahasa Inggris dengan ujian berskala internasional (CRB dan TOEFL Test).</p>
									</div>
								</div>
								{/* <div className="tg-chose-btn wow fadeInUp" data-wow-delay=".8s" data-wow-duration=".9s">
									<Link to="/contact" className="tg-btn tg-btn-switch-animation">
										<Button text="Program Kelas" />
									</Link>
								</div> */}
							</div>
					</div>
				</div>

				<div className="col-lg-7 d-none d-lg-block">
					<div className="tg-chose-right mb-25">
						<div className="row">
								<div className="col-lg-10 col-md-6">
									<div className="tg-chose-thumb-2 wow fadeInRight p-relative" data-wow-delay=".5s" data-wow-duration=".9s">
										<img className="w-100 tg-round-15 d-none d-md-block" src="/assets/img/program-kelas/model-8.png" alt="chose" />
										{/* Gradient putih di bagian bawah */}
										<div style={{
											position: 'absolute',
											bottom: '0',
											left: '0',
											right: '0',
											height: '20%',
											background: 'linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%, transparent 100%)',
											borderRadius: '0 0 15px 15px',
											pointerEvents: 'none'
										}}></div>
									</div>
								</div>
								<div className="col-lg-2 col-md-6">
									<div className="tg-chose-thumb-inner p-relative" style={{ paddingTop: '800px' }}>
										<div className="tg-chose-big-text d-none d-xl-block">
											<h2 data-text="SPEMDUTA">SPEMDUTA</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Choose;