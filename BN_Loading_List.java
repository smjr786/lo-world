package banca.ui;

import centlib.web.JspUtil;
import illustration.beans.DocId;
import illustration.data.IL_CF_LD_LOADINGDB;
import lifeparameter.beans.policy.IL_LoadingBean;
import lifeparameter.data.PR_LF_LD_LOADINGDB;
import policy.data.BO_UW_LD_LOADINGSDB;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

/**
 * Created by Jaffar Ahmed
 * on 10/3/2017
 * at 3:41 PM.
 */
public class BN_Loading_List {

    private String prodCode;
    private DocId docId = null;
    private Map<String, String> loadingDescMap = null;

    /**
     * Return Loadings of product of policy
     * @return List<IL_LoadingBean>
     * @throws SQLException
     */
    public List<IL_LoadingBean> getLoadings() throws SQLException {

        return IL_CF_LD_LOADINGDB.getProdLoadings(this.docId,this.prodCode, null);
    }

    public void setDocId(DocId docId) {
        this.docId = docId;
    }

    public String getProdCode() {
        return prodCode;
    }

    public void setProdCode(String prodCode) {
        this.prodCode = JspUtil.getSanitizedVal(prodCode) ;
    }

    /**
     * Fetch and Return Map<loading Code, Loading description>
     * @return Map<String, String>
     * @throws SQLException
     */
    public Map<String, String> getLoadingDescMap() throws SQLException {
        if(this.loadingDescMap==null){
            this.loadingDescMap = PR_LF_LD_LOADINGDB.getAllLoadingsMap(this.docId.getOrgaCode(),null);
        }
        return this.loadingDescMap;
    }

    /**
     * Return previously added loading description by loading code which can be added once
     * @param loadingCode
     * @return String
     * @throws SQLException
     */
    public String getLoadingDesc(String loadingCode) throws SQLException {
        if(this.loadingDescMap==null){
            this.loadingDescMap = getLoadingDescMap();
        }
        String ret = this.loadingDescMap.get(loadingCode);
        this.loadingDescMap.remove(loadingCode);
        return ret;
    }

    /**
     * Return map of basis i.e Percent..
     * @return Map<String,String>
     */
    public Map<String,String> getBasisMap(){
        return BO_UW_LD_LOADINGSDB.getBasisValueMap();
    }

}
