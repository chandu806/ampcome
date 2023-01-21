// import React from "react";
import styles from "./appointment.module.css";

export const Appointment = () => {
    return (
        <div className={styles.appointments}>
            <div className={styles.title}>Appointments</div>
            <div className={styles.subtitleWrapper}>
                <div className={styles.subtitle}>List of booked appointments</div>
            </div>
            <div className={styles.appointmentsChild} />

            <div className={styles.addAppointment}>
                <div className={styles.addParent}>
                    <div className={styles.add}>Add</div>
                    <img className={styles.addRoundFillIcon} src="./subtract.png" alt="addIcon" />
                </div>
            </div>

            <div className={styles.searchBox}>
                <div className={styles.searchBoxInner}>
                    <input className={styles.searchByName} placeholder="Search by name, number" />
                </div>
                <img className={styles.searchIcon} alt="searchIcon" src="./SearchIcon.png" />
            </div>
            <div className={styles.dateFilter}>
                <div className={styles.inputDiv}>
                    <div className={styles.label}>
                        <div className={styles.inputLabel}>Date</div>
                    </div>
                    <div className={styles.iconText}>
                        <select className={styles.textArea}>
                            <option>This week</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={styles.TypeFilter}>
                <div className={styles.inputDiv}>
                    <div className={styles.label}>
                        <div className={styles.inputLabel}>Consultation Type</div>
                    </div>
                    <div className={styles.iconText}>
                        <select className={styles.textArea}>
                            <option>All</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={styles.statusFilter}>
                <div className={styles.inputDiv}>
                    <div className={styles.label}>
                        <div className={styles.inputLabel}>Status</div>
                    </div>
                    <div className={styles.iconText}>
                        <select className={styles.textArea}>
                            <option>All</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className={styles.invoiceFilter}>
            <div className={styles.inputDiv}>
                    <div className={styles.label}>
                        <div className={styles.inputLabel}>Invoice</div>
                    </div>
                    <div className={styles.iconText}>
                        <select className={styles.textArea}>
                            <option>All</option>
                        </select>
                    </div>
                </div>
            </div>
        </div >
    );
};

