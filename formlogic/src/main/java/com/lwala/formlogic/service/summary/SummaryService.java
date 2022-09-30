package com.lwala.formlogic.service.summary;

import com.lwala.formlogic.model.Request;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class SummaryService {
    Logger requestsLogger = LoggerFactory.getLogger("requests");

    public void logRequest(Request request) {
        String stringBuilder = " RequestUpdate" + ";" +
                " HEALTH FACILITY" + ": " +
                request.getHealthFacility() + " ; " +
                " DATE" + ": " +
                request.getRequestDate() + " ; " +
                " MALARIA QUANTITY" + ": " +
                request.getMalariaQuantity() + "; " +
                " FAMILY PLANNING" + ": " +
                request.getFamilyPlanningQuantity() + "; " +
                " ZINC TABLETS" + ": " +
                request.getZincTabletsQuantity() + "; ";


        requestsLogger.info(stringBuilder);
    }

}
