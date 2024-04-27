import React from "react";

const AddressCard=()=>{
    return(
        <div>
            <div className="space-y-3">
            <dl className="mt-16 grid grid-cols-2 gap-x-4 text-sm text-gray-600">
                        <div>
                        <dt className="font-medium text-gray-900">Shipping Address</dt>
                        <dd className="mt-2">
                            <address className="not-italic">
                            <span className="block">Kristin Watson</span>
                            <span className="block">7363 Cynthia Pass</span>
                            <span className="block">Toronto, ON N3Y 4H8</span>
                            </address>
                        </dd>
                        </div>
                        <div>
                        </div>
                    </dl>
            </div>
            
        </div>
    )
}
export default AddressCard