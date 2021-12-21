import React, { useState, useEffect } from "react";
import "./Revenue.css";
import Layout from "../../components/templates/Layout";
import CustomSlider from "../../components/atoms/Slider";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import BorderedSelect from "../../components/atoms/Inputs/BorderedSelect";
import CustomCheckBox from "../../components/atoms/CustomCheckbox";
import { useDispatch, useSelector } from "react-redux";
import { getBillingDetails } from "../../actions";

const RevenueCalculator = () => {
  const [scrollCls, setScrollCls] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBillingDetails());
  }, []);

  const billingData = useSelector((state) => state.user.billingDetails);
  const [selectedBills, setSelectedBills] = useState([])
  const [totalrevenue, setRevenue] = useState(0)
  const [range, setRange] = useState(200)

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const listenScrollEvent = (event) => {
    if (window.scrollY > 300) {
      setScrollCls("onScrl");
    } else if (window.scrollY < 300) {
      setScrollCls("");
    }
  };

  const handleBills = (values) => {
    let ind = selectedBills.indexOf(values)
    if (ind > -1) {
      setRevenue(totalrevenue - values.cost)
      selectedBills.splice(ind, 1)
    } else {
      setRevenue(totalrevenue + values.cost)
      selectedBills.push(values)
    }
    setSelectedBills(selectedBills)
  }

  return (
    <Layout>
      <div className="rvnueClcWrpr px-5">
        <h2 className="mnHdr">
          How many Medicare patients would you include in your Remote Patient
          Monitoring program?
        </h2>
        <p className="mnTgLn">
          RPM and CCM Programs - CPT code reimbursement (Non-Facility Rates)
          NOTE: These Numbers Vary State to State
        </p>
        <div className={`rvnueCalc ${scrollCls}`}>
          <div className="lftClWrpr">
            <div className="sldrCntnr">
              <h4>Medicare Eligible Patients</h4>
              <p>
                RPM and CCM Programs - CPT code reimbursement (Non-Facility
                Rates) NOTE: These Numbers Vary State to State
              </p>
              <CustomSlider onChange={setRange} />
            </div>
            <div className="cptCodes">
              <label htmlFor="">Selected CPT Codes</label>
              <div className="slctTags mt-3 row">
                {selectedBills && selectedBills.length > 0 && selectedBills.map(data => (
                  <div className="tagCard">
                    CPT-{data.cptCode}
                    <HighlightOffIcon className="ml-2" onClick={() => handleBills(data)} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rtDtlsContainer">
            <div className="ttlRvneWrpr text-left mb-5 mt-2">
              <label htmlFor="">
                Total Gross Revenue <br /> Per Year
              </label>
              <h2>${totalrevenue * range * 12}</h2>
            </div>
            <div className="rvnDtLst">
              <div className="lstTg">
                <label className="m-0">One Time Annual Total</label>
                <h3>${totalrevenue * 12}</h3>
              </div>
              <div className="lstTg">
                <label className="m-0">Total Individual Patient/Month</label>
                <h3>{range}</h3>
              </div>
              <div className="lstTg">
                <label className="m-0">Total Dollars Per Month</label>
                <h3>${totalrevenue * range}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="slctCPTWrpr text-left">
          <h2>Select CPT code for Remote patient monitoring</h2>
          <div className="fltrWrpr row my-4">
            <div className="col-3">
              <BorderedSelect
                label="Filter by payment"
                options={[
                  { id: 1, value: "One time" },
                  { id: 2, value: "10" },
                ]}
              />
            </div>
            <div className="col-3">
              <BorderedSelect
                label="Filter by RPM Type"
                options={[
                  { id: 1, value: "HCPCS" },
                  { id: 2, value: "10" },
                ]}
              />
            </div>
            <div className="col-3">
              <BorderedSelect
                label="Filter by Category"
                options={[
                  { id: 1, value: "Frequently Used" },
                  { id: 2, value: "10" },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="cptDtlsCdsWrpr text-left">
          {billingData && billingData.length !== 0 &&
            billingData.map((values) => (
              <div className="cptCodesCard" key={values.resourceId}>
                <h2>CPT-{values.cptCode}</h2>
                <div className="cptPrcDtls d-flex align-items-center">
                  <p>
                    <span>Payment:</span>
                    {values.billingType}
                  </p>
                  <p>
                    <span>Type:</span>
                    {values.generalType}
                  </p>
                </div>
                <p className="dscrptn">{values.description}</p>
                <CustomCheckBox checked={selectedBills.indexOf(values) > -1} label={values.cost} size="big" onChange={() => handleBills(values)} />
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default RevenueCalculator;
