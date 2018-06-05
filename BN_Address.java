package banca.ui;

import banca.beans.BN_IPH_HandlerBean;
import illustration.data.IL_QT_AD_ADDRESSDB;

import java.util.Map;

/**
 * Created by Jaffar Ahmed
 * on 10/28/2017
 * at 11:12 AM.
 */
public class BN_Address extends BN_IPH_HandlerBean {

    private String addrCode;
    private Map<String, String> addrCodesMap;

    public void setAddrCode(String addrCode) {
        this.addrCode = addrCode;
    }

    public String getAddrCode() {
        return this.addrCode;
    }

    /**
     * Fetch and return address code if local variable is null
     * @return Map<string,string>
     */
    public Map<String, String> getAddrCodesMap(){
        if (this.addrCodesMap == null){
            this.addrCodesMap = IL_QT_AD_ADDRESSDB.getAddrCodesMap();
        }
        return this.addrCodesMap;
    }

    private String prodCode;
    @Override
    public String getIphCode() {
        return "004";
    }

    @Override
    public String getOptionCode() {
        return OPTION_CODE;
    }

    public void setProdCode(String prodCode) {
        this.prodCode = prodCode;
    }

    @Override
    public String getCriteriaDetail() {
        return this.prodCode;
    }

    @Override
    public String getCriteriaCode() {
        return "002";
    }

}
