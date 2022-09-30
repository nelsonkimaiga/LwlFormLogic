package com.lwala.formlogic.service;


import com.lwala.formlogic.model.Request;

import java.util.List;

public interface RequestService {
    Request addRequest(Request request);

    List<Request> fetchRequest();
}
