package com.lwala.formlogic.service;

import com.lwala.formlogic.model.Request;
import com.lwala.formlogic.repository.RequestRepository;
import com.lwala.formlogic.service.summary.SummaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequestServiceImpl implements RequestService {

    @Autowired
    RequestRepository requestRepository;

    @Autowired
    SummaryService summaryService;

    @Override
    public Request addRequest(Request request) {

        // log summary of all requests::
        summaryService.logRequest(request);

        // save request to db:
        return requestRepository.save(request);
    }

    @Override
    public List<Request> fetchRequest() {
        return requestRepository.findAll();
    }


}
