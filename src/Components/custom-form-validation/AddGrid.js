import React,{useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux';
import {useRouter} from 'next/router';
import Head from 'next/head'

import {
  CCol,
  CRow,
  CContainer,
  CFormGroup,
  CLabel,
  CCard,
  CCardBody,
  CCardHeader,
  CAlert,
  CDataTable,
  CSwitch
} from "@coreui/react";
import {gridCreate } from "../../../store/actions/gridAction";
import useForm from "../../../hooks/grid/useForm";
import validate from "../../../validation/GridFormValidationRules";
import AdminLayout from '../../../components/layout/AdminLayout'

const AddGrid= () => {
  const fields = ['title','column','link','image','action'];
  const history = useRouter();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    handleChange,
    deleteGrid,
    addGrid,
    hangleChangeGrid,
    setValues,
    setColumnValue,
    uploadGridImage,
    values,
    errors
  } = useForm(gridSubmit, validate);

  function gridSubmit() {
    dispatch(gridCreate(values));
  };
  const gridCreateData = useSelector((state) => state.gridCreate);
  const {loading, error, grid} = gridCreateData;

  useEffect(() => {
    if(grid){
      history.push("/admin/grid");
    }
  },[grid]);
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="/images/faviicon.svg" />
        <title>Add Grid</title>
      </Head>
    <AdminLayout>
      <CContainer>
        <form className="option-add-form" onSubmit={handleSubmit}>
          <h3 className="d-inline">Add Grid</h3>
          <a href="#grid" className="btn submit-btn float-right">
            Back
          </a>
          <button type="submit" className="btn submit-btn float-right  mr-3">
            Save
          </button>
          <hr />
          {errors &&  errors.message &&
            <CCard>
              <CCardBody>
              <CAlert color="danger">
                    {errors.message}
                  </CAlert>
              </CCardBody>
            </CCard>
          }
          <CCard className="mb-3">
            <CCardBody className="p-3">
              <CRow>
                <CCol sm="2">
                  <CLabel htmlFor="nf-email" style={{ fontWeight: "600" }}>
                    Grid Name
                  </CLabel>
                </CCol>
                <CCol sm="6">
                  <CFormGroup className="mb-0">
                    <input
                      type="text"
                      className="form-control"
                      name="grid_name"
                      placeholder="Enter grid name"
                      value={values.grid_name}
                      onChange = {handleChange}
                    />
                    {errors && errors.grid_name && (
                      <p className="invalid-feedback d-block">{errors.grid_name}</p>
                    )}
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow className="mt-3">
                <CCol sm="2">
                  <CLabel style={{ fontWeight: "600" }}>Status</CLabel>
                </CCol>
                <CCol sm="6">
                  <CSwitch
                    className={"mx-1"}
                    name="status"
                    size={`md`}
                    variant={"3d"}
                    color={"primary"}
                    checked={values.status===1?true:false}
                    onChange={()=>setValues(values => ({ ...values, ['status']: values['status']===0?1:0}))
                  }
                  />
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
          <CCard>
            <CCardHeader>Images</CCardHeader>
            <CCardBody>
              <CDataTable
                items={values.image}
                fields={fields}
                itemsPerPage={5}
                scopedSlots = {{
                  'title':
                  (item,index)=>(
                    <td className="pl-4">
                      <input type="text" className="form-control" name="title" value={item.title} onChange = {(event)=>hangleChangeGrid(event,index)} />
                    </td>
                  ),
                  'column':
                  (item,index)=>(
                    <td className="pl-4">
                     <select className="form-control" name="column" onChange={(event)=>setColumnValue(event,index)}>
                      <option value={1} selected={item.column===1?'selected':''}>1</option>
                      <option value={2} selected={item.column===2?'selected':''}>2</option>
                      <option value={3} selected={item.column===3?'selected':''}>3</option>
                      <option value={4} selected={item.column===4?'selected':''}>4</option>
                     </select>
                    </td>
                  ),
                  'link':
                  (item,index)=>(
                    <td className="pl-4">
                      <input type="text" className="form-control" value={item.link} name="link" onChange = {(event)=>hangleChangeGrid(event,index)} />
                    </td>
                  )
                  ,
                  'image':
                  (item,index)=>(
                    <td className="pl-4">
                      <input type="file" className="form-control" name="image" onChange = {(event)=>uploadGridImage(event,index)} />
                    </td>
                  )
                  ,
                  'action':
                  (item,index)=>(
                    <td className="pl-4">
                      <i onClick={() => deleteGrid(item,index)} className="fa fa-trash cursor-pointer"></i>
                    </td>
                  )
                }}
              />
            </CCardBody>
          </CCard>
          <div className="text-right">
            <button type="button" className="btn submit-btn float-right" onClick={addGrid}>
              <img src="/images/plus.svg" alt="image" />
            </button>
          </div>
        </form>
      </CContainer>
    </AdminLayout>
</>
  );
};

export default AddGrid;
