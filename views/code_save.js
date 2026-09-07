////////////////////////////// คัมภีร์วายุสลาตัน //////////////////////////////////////////////
////////////////////////////// คัมภีร์วายุสลาตัน //////////////////////////////////////////////
////////////////////////////// คัมภีร์วายุสลาตัน //////////////////////////////////////////////

let string_no_syntax = '<%= JSON.stringify(comment_test) %>'
let string_no_free_spec = (JSON.stringify(string_no_syntax.replace(/\n|\t|\r/g, " ")))
let string_to_obj = JSON.parse(string_no_free_spec);

let string_with_syntax = decodedString( string_no_free_spec )

console.log(string_to_obj)

document.getElementById("exampleFormControlTextarea1").value = string_with_syntax

let now = new Date();
let now_set_templece = set_date_templece(now , "/" , "en_long")
console.log(now)
console.log(now_set_templece)

////////////////////////////////////////////////////////////////////////////////////////////////////

class="col-xl-3 col-lg-5 col-md-7 col-sm-9 col-12" // COL

////////////////////////////////////////////////////////////////////////////////////////////////////

<div class="card" data-toggle="collapse" data-target="#collapse1" aria-controls="collapse1" aria-expanded="false">
    <div class="card-body collapse" id="collapse1">
        ...
    </div>
</div> // SLICE

////////////////////////////////////////////////////////////////////////////////////////////////////

const filter_type = [...new Set(data_asset_Obj.map(item => item.assetType))]; // DISTRACE OBJ

user_arr_uniq = [...new Set(user_arr)]; // DISTRACE ARRAY

////////////////////////////////////////////////////////////////////////////////////////////////////

satisfaction_document_str = '<%-JSON.stringify(satisfaction_document)%>'
satisfaction_document_obj = JSON.parse(satisfaction_document_str.replace(/\n|\t|\r/g, ""));

////////////////////////////////////////////////////////////////////////////////////////////////////

data_asset_Obj_clone = data_asset_Obj.filter( function(e){
    return  e.assetType == document.getElementById('filter_type').value 
} )  // FILTER

////////////////////////////////////////////////////////////////////////////////////////////////////

<button data-bs-toggle="modal" data-bs-target="#modal_create_css_1" type="button" class="btn btn-secondary">
    <i class="fa-solid fa-square-envelope"></i>
    ส่งใบประเมินความพึงพอใจ (ครั้งที่ 1)
</button>  // MODAL

////////////////////////////////////////////////////////////////////////////////////////////////////

function query_data( sql , value ) {
    return new Promise((resolve, reject) => {
        condb.query( sql , value , async function(err , result){
            if(err){throw reject(err)}
            resolve(result);
        } )
    });
}

////////////////////////////////////////////////////////////////////////////////////////////////////

let data = [
    {
      iso_id: 1,
      iso_email: 'tritasas@italthaiengineering.com',
      iso_create_date: '2024-03-06T03:52:03.000Z'
    },
    {
      iso_id: 2,
      iso_email: 'bright@italthaiengineering.com',
      iso_create_date: '2024-03-06T03:52:03.000Z'
    }
  ];
  
let emails = data.map(item => item.iso_email).join('; ');

console.log(emails); // 'tritasas@italthaiengineering.com; bright@italthaiengineering.com'

let str = "apple,banana,orange";
let arr = str.split(",");

////////////////////////////////////////////////////////////////////////////////////////////////////

let now_1 = new Date(new Date().setHours(0,0,0,0))

////////////////////////////// คัมภีร์วายุสลาตัน //////////////////////////////////////////////
////////////////////////////// คัมภีร์วายุสลาตัน //////////////////////////////////////////////
////////////////////////////// คัมภีร์วายุสลาตัน //////////////////////////////////////////////


<div class="card" data-toggle="collapse" data-target="#collapse1" aria-controls="collapse1" aria-expanded="false">
    <div class="card-body collapse" id="collapse1">
    </div>
</div>

res.contentType('application/json');
let nextPage = JSON.stringify(`http://172.16.7.144:3000/home`)
res.header('Content-Length', nextPage.length);
res.end(nextPage);

class="col-xl-3 col-lg-5 col-md-7 col-sm-9 col-12"
class="col-xl-3 col-lg-5 col-md-7 col-sm-9 col-12"
class="col-xl-3 col-lg-5 col-md-7 col-sm-9 col-12"
class="col-xl-3 col-lg-5 col-md-7 col-sm-9 col-12"

////////////////////////////////////////////////////////////////////////////////////////////////////

Swal.fire({
    title: "ยืนยันการลบ",
    text: "ยืนยันการลบประวัติการเติมน้ำมันหรือไม่ ?",
    icon : "question",
    showCancelButton: true,
    confirmButtonText: "ยืนยัน, ลบ" ,
    confirmButtonColor: "#027E6F",
    cancelButtonText: "ปิด" ,
    cancelButtonColor: "#00000040",
}).then((result) => {
    if (result.isConfirmed) {

        let data = {
            refueling_id : refueling_id , 
        }

        console.log("data")
        console.log(data)

        $.ajax({
            type: 'POST',
            url: '/delete_refueling_record',
            data: data,
            success: function (call_back_data) {
                window.location.reload();
            },
            error: function (error) {
                console.log("error with Ajax");
                console.log(error);
            }
        });
    }
});

Swal.fire({
    title: "ยืนยันการลบ",
    text: "ยืนยันการลบประวัติการเติมน้ำมันหรือไม่ ?",
    icon : "question",
    showCancelButton: true,
    confirmButtonText: "ยืนยัน, ลบ" ,
    confirmButtonColor: "#dc3545",
    cancelButtonText: "ปิด" ,
    cancelButtonColor: "#00000040",
}).then((result) => {
    if (result.isConfirmed) {

        let data = {
            refueling_id : refueling_id , 
        }

        console.log("data")
        console.log(data)

        $.ajax({
            type: 'POST',
            url: '/delete_refueling_record',
            data: data,
            success: function (call_back_data) {
                window.location.reload();
            },
            error: function (error) {
                console.log("error with Ajax");
                console.log(error);
            }
        });
    }
});

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

function setfilter_1(){
    // let filter_type = []
    // let filter_division = []
    // let filter_project = []

    const filter_type = [...new Set(data_asset_Obj.map(item => item.assetType))];
    const filter_division = [...new Set(data_asset_Obj.map(item => item.responsibleDivition))];
    const filter_project = [...new Set(data_asset_Obj.map(item => item.responsibleProject))];
    const filter_location = [...new Set(data_asset_Obj.map(item => item.location))];

    user_arr_uniq = [...new Set(user_arr)];
    user_arr_uniq = [...new Set(user_arr)];
    user_arr_uniq = [...new Set(user_arr)];
    user_arr_uniq = [...new Set(user_arr)];

    console.log(filter_type)
    console.log(filter_division)
    console.log(filter_project)
    console.log(filter_location)

    let text_filter_type = `<option selected value="">ทั้งหมด</option>`
    let text_filter_division = `<option selected value="">ทั้งหมด</option>`
    let text_filter_project = `<option selected value="">ทั้งหมด</option>`
    let text_filter_location = `<option selected value="">ทั้งหมด</option>`

    for( let i = 0 ; i < filter_type.length ; i++ ){
        text_filter_type += `
        <option value="${filter_type[i]}">${filter_type[i]}</option>
        `
    }

    for( let i = 0 ; i < filter_division.length ; i++ ){
        text_filter_division += `
        <option value="${filter_division[i]}">${filter_division[i]}</option>
        `
    }

    for( let i = 0 ; i < filter_project.length ; i++ ){
        text_filter_project += `
        <option value="${filter_project[i]}">${filter_project[i]}</option>
        `
    }

    for( let i = 0 ; i < filter_location.length ; i++ ){
        text_filter_location += `
        <option value="${filter_location[i]}">${filter_location[i]}</option>
        `
    }

    console.log(text_filter_type)
    console.log(text_filter_division)
    console.log(text_filter_project)
    console.log(text_filter_location)

    document.getElementById('filter_type').innerHTML = text_filter_type
    document.getElementById('filter_division').innerHTML = text_filter_division
    document.getElementById('filter_project').innerHTML = text_filter_project
    document.getElementById('filter_location').innerHTML = text_filter_location
    
}

function change_filter(){
    data_asset_Obj_clone = data_asset_Obj

    if( document.getElementById('filter_type').value != "" ){
        data_asset_Obj_clone = data_asset_Obj.filter( function(e){
            return  e.assetType == document.getElementById('filter_type').value 
        } )
    }

    if( document.getElementById('filter_division').value != "" ){
        data_asset_Obj_clone = data_asset_Obj.filter( function(e){
            return  e.responsibleDivition == document.getElementById('filter_division').value 
        } )
    }

    if( document.getElementById('filter_project').value != "" ){
        data_asset_Obj_clone = data_asset_Obj.filter( function(e){
            return  e.responsibleProject == document.getElementById('filter_project').value 
        } )
    }

    if( document.getElementById('filter_location').value != "" ){
        data_asset_Obj_clone = data_asset_Obj.filter( function(e){
            return  e.location == document.getElementById('filter_location').value 
        } )
    }

    console.log(data_asset_Obj_clone)

    settable_1()
}

function settable_1(){
    let table_1 = ""

    console.log(data_asset_Obj_clone)
    console.log(table_1)

    for(let i = 0 ; i < data_asset_Obj_clone.length ; i++){
        table_1 += `
        <tr>
            <td style="padding-top: 25px;" >${ i+1 }</td>
            <td>
                <a href="#" style="padding: 7px 15px; margin-bottom: 0px; margin-right: 5px;" type="button" class="label theme-bg6 text-white f-14">
                    <i class="feather icon-tag"></i>
                    เพิ่ม
                </a>
            </td>
            <td width="50" style="padding-top: 28px; text-align: center;">
                <input id="checkList${ data_asset_Obj_clone[i].id }" name="" onclick="setCheckList('${ data_asset_Obj_clone[i].id }')" type="checkbox">
            </td>
            <td style="padding-top: 25px;" >${ data_asset_Obj_clone[i].assetID }</td>
            <td style="padding-top: 25px;" >${ data_asset_Obj_clone[i].assetType }</td>
            <td style="padding-top: 25px;" >${ data_asset_Obj_clone[i].assetNameTH }</td>
            <td style="padding-top: 25px;" >${ data_asset_Obj_clone[i].assetNameEN }</td>
            <td style="padding-top: 25px;" >${ data_asset_Obj_clone[i].responsibleName }</td>
            <td style="padding-top: 25px;" >${ data_asset_Obj_clone[i].responsibleDivition }</td>
            <td style="padding-top: 25px;" >${ data_asset_Obj_clone[i].responsibleProject }</td>
            <td style="padding-top: 25px;" >${ data_asset_Obj_clone[i].location }</td>
            <td style="padding-top: 25px;" >${ data_asset_Obj_clone[i].brand }</td>
            <td style="padding-top: 25px;" >${ data_asset_Obj_clone[i].size }</td>
            <td style="padding-top: 25px;" >${ data_asset_Obj_clone[i].seriesNO }</td>
        </tr>
        `
    }

    document.getElementById('div_tables_asset_notTran').innerHTML = ` 
    <table id="tables_asset_notTran" class="table table-hover" style="width:100%">
        <thead>
            <tr>
                <th>Index</th>
                <th>#</th>
                <th>sgg</th>
                <th>assetID</th>
                <th>assetType</th>
                <th>assetNameTH</th>
                <th>assetNameEN</th>
                <th>responsibleName</th>
                <th>responsibleDivition</th>
                <th>responsibleProject</th>
                <th>location</th>
                <th>brand</th>
                <th>size</th>
                <th>seriesNO</th>
            </tr>
        </thead>
        <tbody>
            ${table_1}
        </tbody>
     </table>`

     setTable_jq(5)

}


function setTable_jq(time){
    console.log("dfghjkl")
    setTimeout( function() { resetTb_1() }, time);
}

function resetTb_1(){
    console.log("dfghjkl2")

    $('#tables_asset_notTran').DataTable({
        destroy: true,
        retrieve:true,
        "paging": true,
        "responsive": false, 
        "lengthChange": false, 
        "searching": true,
        "autoWidth": true,
        "ordering": true,
        "info": true,
        "scrollX": true,
        "fixedColumns": false
    });
}


////////////////////////////////////////////////////////////////////////////////////////////////////

<div class="card" id="lost_card">
                                    <div class="card-header">
                                        <% if( data_lost_damage_doc[0].ldd_type_doc == "เสียหาย" ){ %>
                                            <h5>
                                                <i class="feather icon-info text-c-blue wid-20"></i>
                                                <span class="p-l-5">รายการที่เสียหาย</span>
                                            </h5>
                                        <% }else if( data_lost_damage_doc[0].ldd_type_doc == "สูญหาย" ){ %>
                                            <h5>
                                                <i class="feather icon-info text-c-blue wid-20"></i>
                                                <span class="p-l-5">รายการที่สูญหาย</span>
                                            </h5>
                                        <% } %>
                                        
                                    </div>
                                    <div class="card-body " id="">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <!-- <div class="row">
                                                    <button id="qrcode_btn" data-toggle="modal" data-target="#scanQr" class="btn btn-square btn-secondary"><i class="feather icon-hash"></i>สแกน Qr code</button>
                                                    <button onclick="setTable_jq(200)" data-toggle="modal" data-target="#allAsset" class="btn btn-square btn-secondary"><i class="feather icon-menu"></i>ค้นหารายการทรัพย์</button>
                                                    <input onchange="input_assetcode_text()" id="get_some_code" value="" type="text" name="" class="form-control" style="width: 300px;" />
                                                </div> -->
                                            </div>                                            
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <% if( data_lost_damage_doc[0].ldd_type_doc == "เสียหาย" ){ %>
                                                    <table id="tables_asset_lost" class="table table-hover" style="width:100%">
                                                        <thead>
                                                            <tr>
                                                                <th>Index</th>
                                                                <th>#</th>
                                                                <th>Asset Code</th>
                                                                <th>Name TH</th>
                                                                <th>Name EN</th>
                                                                <th>Brand</th>
                                                                <th>Model</th>
                                                                <th>Size</th>
                                                                <th>Series NO.</th>
                                                                <th>Remark</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <% index = 1 ; %>
                                                            <% data_asset_in_list.forEach( function(e) { %>                                                
                                                                <tr>
                                                                    <td style="padding-top: 25px;" ><%= index %></td>
                                                                    <td style="padding-top: 20px;">
                                                                        <!-- style="padding: 7px 10px; margin-bottom: 0px; margin-right: 5px;" -->
                                                                        <a href="#" onclick="set_delete_asset_row('<%= e.lda_id_unique %>' , '<%= data_lost_damage_doc[0].ldd_type_doc %>' , '<%= data_lost_damage_doc[0].ldd_id_unique %>' )" type="button" class="label theme-bg4 text-white f-14" data-toggle="modal" data-target="#confirmDelete_1">
                                                                            <i class="feather icon-trash-2"></i>
                                                                        </a>
                                                                        <a href="#" onclick="setRowId('<%= data_lost_damage_doc[0].ldd_id_unique %>' , '<%= e.lda_id_unique %>')" type="button" class="label theme-bg2 text-white f-14" data-toggle="modal" data-target="#uploadfile">
                                                                            <i class="feather icon-paperclip"></i>
                                                                            แนบรูป
                                                                        </a>
                                                                        <% if( e.lda_status_upload == "1" ){ %>
                                                                            <a onclick="setTable_upload('<%= e.lda_id_unique %>')" data-toggle="modal" data-target="#viewfile" href="#" class="label theme-bg6 text-white f-14" >
                                                                                <i class="feather icon-image" ></i>
                                                                            </a>
                                                                        <% } %>
                                                                    </td>
                                                                    <td style="padding-top: 25px;" ><%= e.lda_asset_code %></td>
                                                                    <td style="padding-top: 25px;" ><%= e.lda_asset_assetNameTH %></td>
                                                                    <td style="padding-top: 25px;" ><%= e.lda_asset_assetNameEN %></td>
                                                                    <td style="padding-top: 25px;" ><%= e.lda_asset_brand %></td>
                                                                    <td style="padding-top: 25px;" ><%= e.lda_asset_model %></td>
                                                                    <td style="padding-top: 25px;" ><%= e.lda_asset_size %></td>
                                                                    <td style="padding-top: 25px;" ><%= e.lda_asset_seriesNO %></td>
                                                                    <td style="padding-top: 15px;" >
                                                                        <textarea onchange="get_comment('<%= e.lda_id_unique %>')" id="remark_asset_<%= e.lda_id_unique %>" class="form-control" rows="1" style="width: 100%; min-width: 200px;"><%= e.lda_remark %></textarea>
                                                                    </td>
                                                                </tr>
                                                            <% index++ } ) %>
                                                        </tbody>
                                                    </table>
                                                <% }else if( data_lost_damage_doc[0].ldd_type_doc == "สูญหาย" ){ %>
                                                    <table id="tables_asset_damage" class="table table-hover" style="width:100%">
                                                        <thead>
                                                            <tr>
                                                                <th>Index</th>
                                                                <th>#</th>
                                                                <th>Asset Code</th>
                                                                <th>Name TH</th>
                                                                <th>Name EN</th>
                                                                <th>Brand</th>
                                                                <th>Model</th>
                                                                <th>Size</th>
                                                                <th>Series NO.</th>
                                                                <th>Remark</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <% index = 1 ; %>
                                                            <% data_asset_in_list.forEach( function(e) { %>                                                
                                                                <tr>
                                                                    <td style="padding-top: 25px;" ><%= index %></td>
                                                                    <td>
                                                                        <a href="#" onclick="set_delete_asset_row('<%= e.lda_id_unique %>' , '<%= data_lost_damage_doc[0].ldd_type_doc %>' , '<%= data_lost_damage_doc[0].ldd_id_unique %>')" style="padding: 7px 10px; margin-bottom: 0px; margin-right: 5px;" type="button" class="label theme-bg4 text-white f-14" data-toggle="modal" data-target="#confirmDelete_1">
                                                                            <i class="feather icon-trash-2"></i>
                                                                        </a>
                                                                    </td>
                                                                    <td style="padding-top: 25px;" ><%= e.lda_asset_code %></td>
                                                                    <td style="padding-top: 25px;" ><%= e.lda_asset_assetNameTH %></td>
                                                                    <td style="padding-top: 25px;" ><%= e.lda_asset_assetNameEN %></td>
                                                                    <td style="padding-top: 25px;" ><%= e.lda_asset_brand %></td>
                                                                    <td style="padding-top: 25px;" ><%= e.lda_asset_model %></td>
                                                                    <td style="padding-top: 25px;" ><%= e.lda_asset_size %></td>
                                                                    <td style="padding-top: 25px;" ><%= e.lda_asset_seriesNO %></td>
                                                                    <td style="padding-top: 15px;" >
                                                                        <textarea onchange="get_comment('<%= e.lda_id_unique %>')" id="remark_asset_<%= e.lda_id_unique %>" class="form-control" rows="1" style="width: 100%; min-width: 200px;"><%= e.lda_remark %></textarea>
                                                                    </td>
                                                                </tr>
                                                            <% index++ } ) %>
                                                        </tbody>
                                                    </table>
                                                <% } %>
                                                
                                                
                                            </div>
                                            <div class="col-md-12">
                                                <% if( data_lost_damage_doc[0].ldd_type_doc == "เสียหาย" ){ %>
                                                    <% if( data_lost_damage_doc[0].ldd_status_update_file == "1" ){ %>
                                                        <button style="height: 40px; width: 100%; margin-top: 30px;" data-toggle="modal" data-target="#confirmModalDamage" class="btn shadow-3 btn-info">
                                                            <i class="feather icon-check-square"></i>
                                                            บันทึก
                                                        </button>
                                                    <% }else if( data_lost_damage_doc[0].ldd_status_update_file == "0" ){ %>
                                                        <button disabled style="height: 40px; width: 100%; margin-top: 30px;" class="btn shadow-3 btn-info">
                                                            <i class="feather icon-check-square"></i>
                                                            กรุณาใส่รูปให้ครบ
                                                        </button>
                                                    <% } %>
                                                <% }else if( data_lost_damage_doc[0].ldd_type_doc == "สูญหาย" ){ %>
                                                    <button style="height: 40px; width: 100%; margin-top: 30px;" data-toggle="modal" data-target="#confirmModalLost" class="btn shadow-3 btn-info">
                                                        <i class="feather icon-check-square"></i>
                                                        บันทึก
                                                    </button>
                                                <% } %>
                                            </div>
                                        </div>
                                    </div>
                                </div>

////////////////////////////////////////////////////////////////////////////////////////////////////

<div class="col-md-12 col-sm-12 col-12 py-1" style="margin-bottom: 10px;">
                                                    <table id="tables_doc_file" class="table table-hover" style="width:100%">
                                                        <thead>
                                                            <tr>
                                                                <th width="10">ลำดับ</th>
                                                                <th width="10">เครื่องมือ</th>
                                                                <th>ชื่อไฟล์</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <% index = 1 ; %>
                                                            <% data_file_upload.forEach( function(e) { %>
                                                                <tr>
                                                                    <td><%= index %></td>
                                                                    <td>
                                                                        <a href="/delete_file_lost_damage/<%= e.ldfu_id_unique %>/<%= e.ldfu_asset_id %>/<%= e.ldfu_doc_id %>" class="label theme-bg4 text-white f-14" >
                                                                            <i class="feather icon-trash-2" ></i>
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <a href="<%= e.ldfu_newname %>" target="_blank"><%= e.ldfu_oldname %></a>
                                                                    </td>
                                                                </tr>
                                                            <% index++ } ) %>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                ////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////

function fucntion_1(array_asset_id){
    return new Promise((resolve, reject) => {  
        (async () => {
            for (let i = 0; i < array_asset_id.length; i++) {
                await new Promise((innerResolve, innerReject) => {
                    condb.query( sql_5 , array_asset_id[i] , function(err , result){
                        if(err){throw err}
                    } )
                });
            }

            resolve('Loop completed');
            condb.query( `UPDATE tb_write_off_doc SET woD_status_doc = "1" , woD_type_doc_ld = ? WHERE woD_uniqID = ?` , [write_off_asset_id[0].lda_status_type , new_doc[0].woD_uniqID] , function(err , result){
                if(err){throw err}
            } )
            
        })();
    });
}

<div class="modal fade bd-example-modal-lg" id="get_job" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">ยืนยันการรับงานรายการนี้</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <label class="form-label">หมายเหตุ : หากท่านรับงานนี้แล้ว ชื่อผู้รับผิดชอบคำขอนี้ จะเป็นชื่อท่าน ยืนยันหรือไม่?</label>
                    </div>
                </div>

            </div>
            <div class="modal-footer">
                <button onclick="" type="button" class="btn btn-primary">ยืนยัน</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">ปิด</button>
            </div>
        </div>
    </div>
</div>
