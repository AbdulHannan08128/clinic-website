"use client";
import { get } from "../../../functions/axios.get";
import { useState, useEffect } from "react";
export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 10;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "auto";
export const maxDuration = 5;
import Image from "next/image";
import styles from "./Appointment.module.css";
import Search from "../adminComponents/Icons/Search";
import LoadingSkeleton from "../adminComponents/LoadingSkeleton/LoadingSkeleton";
import SearchIcon from "../adminComponents/Icons/Search";
import axios from 'axios'
export default function Appointment(props) {
  const [appointments, setAppointments] = useState(); // Initialize with an empty array

  async function getData() {
    try {
      await get(props.URL, (data) => {
        console.log("Data Fetch Successful");
        setAppointments(data.data.reverse()); // Set appointments with the data received
        // setTimeout(() => setRefreshToken(Math.random()), 60000);
      });
      // You can alert or console.log the data
    } catch (error) {
      console.error("Error fetching data");
    }
  }

  const [refreshToken, setRefreshToken] = useState(Math.random());
  const [search, setSearch] = useState();
  const [arr, setArr] = useState([]);
  function Status(e) {
    const appointmentId = e.target.getAttribute("placeholder");
    const newOption = e.target.value;
    
  }
  useEffect(() => {
    getData();
  }, [refreshToken]);

  function searchChange(e) {
    let s = e.target.value.toUpperCase();
    setSearch(!!s);

    let myarr = [];
    appointments.forEach((appointment) => {
      if (
        appointment.username.toUpperCase().includes(s) ||
        appointment._id.toUpperCase().includes(s) ||
        appointment.email.toUpperCase().includes(s) ||
        appointment.number.toString().toUpperCase().includes(s) ||
        appointment.appointmentDate.toString().toUpperCase().includes(s)
      ) {
        myarr.push(appointment);
      } else {
      }
    });
    setArr(myarr);
    if (myarr.length == 0) {
      setSearch(false);
    }
    console.log(arr);
  }

  // Empty dependency array ensures that the effect runs only once on mount

  return (
    <>
      {/* Map through appointments if it's an array */}

      <div className={styles.appointments}>
        {appointments ? (
          <>
            <span>
              <input
                type="search"
                className={styles.search}
                onChange={searchChange}
                placeholder="&#128269; Search By Id, Name, Email, Date or Ph. Number"
              />
              {/* <span className={styles.sIcon}><SearchIcon className={styles.icon}/></span> */}
            </span>
            <table>
              <thead className={styles.head}>
                <tr>
                  <th>S.No.</th>
                  <th>Photo</th>
                  <th>Username</th>
                  <th>App. Date</th>
                  <th>App. ID</th>
                  <th>Ph. Number</th>
                  <th>Email ID</th>
                  <th>Status</th>
                </tr>
              </thead>
              {search
                ? arr.map((appointment, i) => (
                    <tr key={i + 1} className={styles.tr}>
                      <td>{i + 1}</td>
                      {appointment.photo && (
                        <td>
                          <img
                            src={`data:image/png;base64,${Uint8Array.from(
                              appointment.photo.data
                            ).reduce(
                              (data, byte) => data + String.fromCharCode(byte),
                              ""
                            )}`}
                            alt="Binary Image"
                            width={50}
                            height={50}
                            className={styles.binimage}
                          />
                        </td>
                      )}

                      <td>{appointment.username}</td>
                      <td>
                        {appointment.appointmentDate
                          ? appointment.appointmentDate.slice(0, 16)
                          : ""}
                      </td>
                      <td>{appointment._id}</td>
                      <td>{appointment.number}</td>
                      <td>{appointment.email}</td>
                      <td>Status</td>
                    </tr>
                  ))
                : appointments
                ? appointments.map((appointment, i) => (
                    <tr key={i + 1} className={styles.tr}>
                      <td>{i + 1}</td>
                      {appointment.photo && (
                        <td>
                          <img
                            src={`data:image/png;base64,${Uint8Array.from(
                              appointment.photo.data
                            ).reduce(
                              (data, byte) => data + String.fromCharCode(byte),
                              ""
                            )}`}
                            alt="Binary Image"
                            width={50}
                            height={50}
                            className={styles.binimage}
                          />
                        </td>
                      )}

                      <td>{appointment.username}</td>
                      <td>
                        {appointment.appointmentDate
                          ? appointment.appointmentDate.slice(0, 16)
                          : ""}
                      </td>
                      <td>{appointment._id}</td>
                      <td>{appointment.number}</td>
                      <td>{appointment.email}</td>
                      <td>
                        <select
                          className=""
                          style={{ cursor: "pointer" }}
                          value={appointment.status&&appointment.status}
                          onChange={Status}
                          placeholder={appointment._id}
                          
                        >
                          <option value='Pending'  default hidden>
                            Pending
                          </option>
                          <option value="Accept">Accept</option>
                          <option value="Dismiss">Dismiss</option>
                        </select>
                      </td>
                    </tr>
                  ))
                : "No Data"}
            </table>
          </>
        ) : (
          <LoadingSkeleton />
        )}
      </div>

      {/* {appointments ? appointments.map((appointment, i) => (
        <div key={i}>{appointment.username}</div>
      )):'No Data'} */}
    </>
  );
}
