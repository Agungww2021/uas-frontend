import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        nama,
        umur,
        jeniskelamin,
        nomerhp,
        email,
        tipeRumah
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Nama"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">umur</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={umur}
                onChange={(e) => setumur(e.target.value)}
                placeholder="umur"
              />
            </div>
          </div>          
          <div className="field">
            <label className="label">jeniskelamin</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={jeniskelamin}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="laki-laki">laki-laki</option>
                  <option value="wanita">wanita</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">nomerhp</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nomerhp}
                onChange={(e) => setnomerhp(e.target.value)}
                placeholder="nomerhp"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">tiperumah</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={tiperumah}
                onChange={(e) => settiperumah(e.target.value)}
                placeholder="tiperumah"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
