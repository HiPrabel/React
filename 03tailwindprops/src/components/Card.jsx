import React from 'react'

// function Card({transaction='100', asset='50', user='10'}) {
//   return (
//     <div className="bg-gray-800 py-16 sm:py-24 rounded-md mb-2">
//   <div className="mx-auto max-w-7xl px-6 lg:px-8">
//     <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
//       <div className="mx-auto flex max-w-xs flex-col gap-y-4">
//         <dt className="text-base leading-7 text-white">Transactions every 24 hours</dt>
//         <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{transaction} million</dd>
//       </div>
//       <div className="mx-auto flex max-w-xs flex-col gap-y-4">
//         <dt className="text-base leading-7 text-white">Assets under holding</dt>
//         <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">${asset} trillion</dd>
//       </div>
//       <div className="mx-auto flex max-w-xs flex-col gap-y-4">
//         <dt className="text-base leading-7 text-white">New users annually</dt>
//         <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{user},000</dd>
//       </div>
//     </dl>
//   </div>
// </div>
//   )
// }

function Card(props) {
  return (
    <div className="bg-gray-800 py-16 sm:py-24 rounded-md mb-2">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-white">Transactions every 24 hours</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{props.transaction ? `${props.transaction} million` : '100 million'}</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-white">Assets under holding</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">${props.asset ? `${props.asset} trillion` : '50 trillion'} </dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-white">New users annually</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{props.user ? `${props.user},000` : `10,000`}</dd>
      </div>
    </dl>
  </div>
</div>
  )
}

export default Card