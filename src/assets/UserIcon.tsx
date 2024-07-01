import React from 'react'

export default function UserIcon({
    size = 32, fill = '#fff'
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fill} viewBox="0 0 24 24" id="account"><path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"></path></svg>
  )
}


export  function EyeIcon({
    size = 32, fill = '#fff', onClick
}: {
    size?: number,
    fill?: string,
    onClick: ()=>void

}) {
  return (
    <svg width={size} fill={fill} onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="eye"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"></path></svg>
  )
}

export  function HideEyeIcon({
    size = 32, fill = '#fff', onClick
} :{
    size?: number,
    fill?: string,
    onClick: ()=>void
}) {
  return (
    <svg width={size} height={size} onClick={onClick} fill={fill} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" clip-rule="evenodd" viewBox="0 0 64 64" id="hide"><rect width={size} height={size} fill="none"></rect><path d="M568.687,32C571.83,39.211 581.07,58 592,58C596.706,58 601.092,54.436 604.807,49.893C605.768,48.717 606.989,49.454 607.532,51.537C608.074,53.62 607.734,56.265 606.773,57.44C602.492,62.675 597.422,66.667 592,66.667C576.826,66.667 564.463,34.772 564.463,34.772C563.846,33.166 563.846,30.834 564.463,29.228C564.463,29.228 576.826,-2.667 592,-2.667C607.174,-2.667 619.537,29.228 619.537,29.228C620.154,30.834 620.154,33.166 619.537,34.772C619.537,34.772 617.999,38.792 615.336,43.971C614.996,44.632 614.637,45.312 614.261,46.006C613.421,47.556 612.158,47.336 611.442,45.515C610.727,43.694 610.828,40.957 611.669,39.407C612.017,38.764 612.349,38.134 612.664,37.521C613.771,35.368 614.664,33.438 615.306,31.983C612.156,24.761 602.922,6 592,6C581.07,6 571.83,24.789 568.687,32Z" transform="matrix(1 0 0 .46154 -560 17.23)"></path><path d="M592,22C586.481,22 582,26.481 582,32C582,37.519 586.481,42 592,42C597.519,42 602,37.519 602,32C602,26.481 597.519,22 592,22ZM592,26C595.311,26 598,28.689 598,32C598,35.311 595.311,38 592,38C588.689,38 586,35.311 586,32C586,28.689 588.689,26 592,26Z" transform="translate(-560)"></path><path d="M648.824,15.82L692.824,51.82C693.716,52.55 694.968,52.328 695.617,51.323C696.267,50.319 696.069,48.911 695.176,48.18L651.176,12.18C650.284,11.45 649.032,11.672 648.383,12.677C647.733,13.681 647.931,15.089 648.824,15.82Z" transform="matrix(1 0 0 .88889 -640 3.556)"></path></svg>
  )
}


 
 export  function EmailIcon({
  size = 32
 }) {
   return (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 16 16" viewBox="0 0 16 16" id="email"><g display="none"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M12.5,13.5h-11c-0.6,0-1-0.4-1-1v-9c0-0.6,0.4-1,1-1h13c0.6,0,1,0.4,1,1v9c0,0.6-0.4,1-1,1"></path><polyline fill="none" stroke="#000" strokeLinejoin="round" strokeMiterlimit="10" points="15.2 2.8 8 8.5 .8 2.8"></polyline></g><path d="M14.5,2h-13C0.7,2,0,2.7,0,3.5v9C0,13.3,0.7,14,1.5,14h11c0.3,0,0.5-0.2,0.5-0.5S12.8,13,12.5,13h-11
		C1.2,13,1,12.8,1,12.5v-9l6.7,5.4C7.8,9,7.9,9,8,9s0.2,0,0.3-0.1L15,3.5v9c0,0.3-0.2,0.5-0.5,0.5c-0.3,0-0.5,0.2-0.5,0.5
		s0.2,0.5,0.5,0.5c0.8,0,1.5-0.7,1.5-1.5v-9C16,2.7,15.3,2,14.5,2z M8,7.9L1.9,3h12.1L8,7.9z" display="none"></path><g display="none"><path fill="#f9b65f" d="M15.2,2.8L8,8.5L2,3.7v7.8c0,1.1,0.9,2,2,2h10.5c0.6,0,1-0.4,1-1v-9C15.5,3.2,15.4,2.9,15.2,2.8z"></path><path fill="#e67e22" d="M15.2,2.8L8,8.5L0.8,2.8C1,2.6,1.2,2.5,1.5,2.5h13C14.8,2.5,15,2.6,15.2,2.8z"></path><path fill="#3e3643" d="M14.5,2h-13C0.7,2,0,2.7,0,3.5v9C0,13.3,0.7,14,1.5,14h11c0.3,0,0.5-0.2,0.5-0.5S12.8,13,12.5,13h-11
			C1.2,13,1,12.8,1,12.5v-9l6.7,5.4C7.8,9,7.9,9,8,9s0.2,0,0.3-0.1L15,3.5v9c0,0.3-0.2,0.5-0.5,0.5c-0.3,0-0.5,0.2-0.5,0.5
			s0.2,0.5,0.5,0.5c0.8,0,1.5-0.7,1.5-1.5v-9C16,2.7,15.3,2,14.5,2z M8,7.9L1.9,3h12.1L8,7.9z"></path></g><g display="none"><path fill="#fc9942" d="M15.5,2.4L15.5,2.4C15.5,2.4,15.5,2.4,15.5,2.4c-0.1-0.1-0.2-0.1-0.2-0.2C15.1,2.1,15,2.1,14.8,2
			c-0.1,0-0.2,0-0.3,0H8v7c0.1,0,0.2,0,0.3-0.1l7.2-5.8c0.1-0.1,0.2-0.2,0.2-0.4C15.7,2.6,15.6,2.5,15.5,2.4z"></path><path fill="#ffda45" d="M15.5,2.4c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1-0.1,0.3-0.2,0.4L8.3,8.9C8.2,9,8.1,9,8,9v5h6.5
			c0.8,0,1.5-0.7,1.5-1.5v-9C16,3.1,15.8,2.7,15.5,2.4z"></path><path fill="#ffc247" d="M8,2H1.5C1.4,2,1.3,2,1.2,2C1,2.1,0.9,2.1,0.7,2.2c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0l0,0
			C0.4,2.5,0.3,2.6,0.3,2.8c0,0.1,0.1,0.3,0.2,0.4l7.2,5.8C7.8,9,7.9,9,8,9V2z"></path><path fill="#ffee6e" d="M8,9C7.9,9,7.8,9,7.7,8.9L0.5,3.1C0.4,3,0.3,2.9,0.3,2.8c0-0.1,0.1-0.3,0.2-0.4C0.2,2.7,0,3.1,0,3.5v9
			C0,13.3,0.7,14,1.5,14H8V9z"></path></g><g><path fill="#3e5959" d="M8,9C7.9,9,7.8,9,7.7,8.9L0.5,3.1l0.6-0.8L8,7.9l6.8-5.5l0.6,0.8L8.3,8.9C8.2,9,8.1,9,8,9z"></path><path fill="#1689fc" d="M14.5,14c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5c0.3,0,0.5-0.2,0.5-0.5v-9C15,3.2,14.8,3,14.5,3h-13
				C1.2,3,1,3.2,1,3.5v9C1,12.8,1.2,13,1.5,13h11c0.3,0,0.5,0.2,0.5,0.5S12.8,14,12.5,14h-11C0.7,14,0,13.3,0,12.5v-9
				C0,2.7,0.7,2,1.5,2h13C15.3,2,16,2.7,16,3.5v9C16,13.3,15.3,14,14.5,14z"></path></g><g display="none"><path fill="#00ecce" d="M15.5,3.5v9c0,0.5-0.5,1-1,1h-13c-0.5,0-1-0.5-1-1v-9c0-0.3,0.1-0.6,0.3-0.8L8,8.5l7.2-5.8
			C15.4,2.9,15.5,3.2,15.5,3.5z"></path><path fill="#01a28e" d="M14.5,2h-13C0.7,2,0,2.7,0,3.5v9C0,13.3,0.7,14,1.5,14h11c0.3,0,0.5-0.2,0.5-0.5S12.8,13,12.5,13h-11
			C1.2,13,1,12.8,1,12.5v-9l6.7,5.4C7.8,9,7.9,9,8,9s0.2,0,0.3-0.1L15,3.5v9c0,0.3-0.2,0.5-0.5,0.5c-0.3,0-0.5,0.2-0.5,0.5
			s0.2,0.5,0.5,0.5c0.8,0,1.5-0.7,1.5-1.5v-9C16,2.7,15.3,2,14.5,2z M8,7.9L1.9,3h12.1L8,7.9z"></path></g></svg>
   )
 }
 